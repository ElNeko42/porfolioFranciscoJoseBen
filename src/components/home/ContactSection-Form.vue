<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import GlassButton from '@/components/GlassButton.vue';

const SERVICE_ID = 'service_fn837fw';
const TEMPLATE_ID = 'template_oavlybe';
const USER_ID = 'SHWu4JHL-KcOAy5em';

const name = ref('');
const email = ref('');
const message = ref('');
const sending = ref(false);
const isMessageAvailable = ref(true);
const cooldownTimeLeft = ref('00:00');

const checkMessageAvailable = () => {
  const lastMessage = localStorage.getItem('lastMessage');
  if (lastMessage) {
    const lastMessageTime = new Date(lastMessage);
    const currentTime = new Date();
    const difference = currentTime.getTime() - lastMessageTime.getTime();
    const differenceInMinutes = difference / 60000;
    if (differenceInMinutes < 30) {
      const minutes = 30 - Math.floor(differenceInMinutes);
      const seconds = 59 - Math.floor((difference % (1000 * 60)) / 1000);
      cooldownTimeLeft.value = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      setTimeout(checkMessageAvailable, 1000);
      isMessageAvailable.value = false;
      return false;
    }
  }
  isMessageAvailable.value = true;
  return true;
};

const submitForm = () => {
  if (!checkMessageAvailable()) {
    console.error("You can't send more messages yet.");
    return;
  }

  sending.value = true;

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    .then(response => {
      console.log('Email sent successfully!', response.status, response.text);
      const currentDateTime = new Date(Date.now()).toISOString();
      localStorage.setItem('lastMessage', currentDateTime);
      checkMessageAvailable();
      sending.value = false;
    })
    .catch(error => {
      console.error('Failed to send email.', error);
      sending.value = false;
    });
};
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="open-sans flex w-full max-w-[600px] flex-col gap-y-5 self-center pt-3 text-start"
  >
    <label class="block" for="name">
      {{ $t('contact.name_label') }}
      <input
        type="text"
        name="name"
        v-model="name"
        autocomplete="name"
        :placeholder="$t('contact.name_placeholder')"
        class="block min-h-[45px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
        required
      />
    </label>
    <label class="block" for="email">
      {{ $t('contact.email_label') }}
      <input
        type="email"
        name="email"
        v-model="email"
        autocomplete="email"
        :placeholder="$t('contact.email_placeholder')"
        class="block min-h-[45px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
        required
      />
    </label>
    <label class="block" for="message">
      {{ $t('contact.message_label') }}
      <textarea
        name="message"
        v-model="message"
        class="block min-h-[45px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 py-2 outline-0 focus:outline-1 focus:outline-primary-700"
        :placeholder="$t('contact.message_placeholder')"
        required
      ></textarea>
    </label>

    <span v-if="!isMessageAvailable" class="source-sans text-center text-sm text-red-600">
      {{ $t('contact.restriction') }}
    </span>

    <span class="mx-auto">
      <GlassButton :disabled="sending || !isMessageAvailable" type="submit" title="Send message">
        <span v-if="isMessageAvailable" class="px-3">
          {{ sending ? $t('contact.sending') : $t('contact.send') }}
        </span>
        <span v-else class="px-3">
          {{ cooldownTimeLeft }}
        </span>
      </GlassButton>
    </span>
  </form>
</template>
