<template>
  <div class="header">
    <div class="header-left">
      <EditableField v-model="cv.name" tag="h1" />
      <EditableField v-model="cv.title" tag="div" class="title" />
      <div class="contacts">
        <span
          v-for="contact in cv.contacts"
          :key="contact.id"
          class="contact-item"
        >
          <EditableField v-model="contact.icon" />
          <EditableField v-model="contact.text" />
          <DeleteButton @click="removeContact(contact.id)" />
        </span>
        <AddButton label="Contact" @click="addContact" />
      </div>
    </div>

    <div
      v-if="useProfileImage"
      class="avatar-wrap"
      title="Click to change photo"
      @click="fileInput.click()"
    >
      <img
        :src="cv.avatar"
        alt="Profile photo"
        style="background-size: cover"
      />
      <div class="avatar-overlay no-print">📷</div>
    </div>
    <button
      class="toolbar-btn no-print"
      @click="useProfileImage = !useProfileImage"
    >
      Image
    </button>
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      style="display: none"
      @change="handleUpload"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCvData, uid } from "../composables/useCvData";
import EditableField from "./EditableField.vue";
import DeleteButton from "./DeleteButton.vue";
import AddButton from "./AddButton.vue";

const cv = useCvData();
const fileInput = ref(null);
const useProfileImage = ref(false);

function handleUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    cv.avatar = ev.target.result;
  };
  reader.readAsDataURL(file);
  e.target.value = "";
}

function addContact() {
  cv.contacts.push({ id: uid(), icon: "✉", text: "email@example.com" });
}

function removeContact(id) {
  const idx = cv.contacts.findIndex((c) => c.id === id);
  if (idx !== -1) cv.contacts.splice(idx, 1);
}
</script>
