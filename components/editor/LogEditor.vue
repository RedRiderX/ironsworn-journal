<template>
  <div class="log-input relative">
    <client-only>
      <editor-content
        class="basic-editor rich-text bg-white border border-gray-400 p-2 main-editor pr-24"
        style="min-height: 2rem"
        :editor="editor"
      />
    </client-only>
    <BaseButton
      class="absolute bottom-0 right-0 m-1"
      @click="updateTextLog"
      label="Save"
      icon="SvgoAddPost"
    />
  </div>
</template>

<script setup lang="ts">
// Import the basic building blocks
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const props = defineProps({
  uuid: String,
})
const emit = defineEmits(['update-done'])
const activityLogStore = useActivityLogStore()

const editor = ref(null)
const htmlDoc = ref(activityLogStore.list.find(
  (el) => el.uuid === props.uuid
).data.html)

function updateTextLog() {
  activityLogStore.updateTextLog({
    uuid: props.uuid,
    html: htmlDoc.value,
  });
  emit("update-done");
  // this.editor.clearContent(true);
}

onMounted(() => {
  // Create an `Editor` instance with some default content. The editor is
  // then passed to the `EditorContent` component as a `prop`
  editor.value = new Editor({
    extensions: [
      StarterKit.configure({
        // Disable an included extension
        codeBlock: false,
        horizontalRule: false,
        listItem: false,
        orderedList: false,
        bulletList: false,
        code: false,

        // Configure an included extension
        heading: {
          levels: [1],
        },
      }),
    ],
    onUpdate: () => {
      htmlDoc.value = editor.value.getHTML()
    },
    content: htmlDoc.value,
  })
})

onUnmounted(() => {
  // Always destroy your editor instance when it's no longer needed
  editor.value.destroy();
})
</script>
