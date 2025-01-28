<template>
  <div class="log-input relative">
    <client-only>
      <editor-content
        class="basic-editor rich-text bg-white border border-gray-400 p-2 main-editor pr-24 focus:border-black min-h-[2rem]"
        :editor="editor"
      />
    </client-only>
    <BaseButton
      class="absolute bottom-0 right-0 m-1"
      @click="makeTextLog"
      label="Post"
      icon="SvgoAddPost"
    />
  </div>
</template>

<script setup lang="ts">
// Import the basic building blocks
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from '@tiptap/extension-placeholder'

const activityLogStore = useActivityLogStore()
const editor = ref(null)
const htmlDoc = ref(null)

function makeTextLog() {
  activityLogStore.addTextLog(htmlDoc)
  editor.value.clearContent(true)
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
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Describe Your Journey …',
      }),
    ],
    onUpdate: () => {
      htmlDoc.value = editor.value.getHTML();
    },
    content: `<h1>Pariatur laudantium </h1><p class="">totam et exercitationem id. Animi sint tempore aliquam sint. Et incidunt est ut quidem. </p><blockquote><p>foo bar qum quat</p><p><em>- Fibtu</em></p></blockquote><h1>Sequi assumenda </h1><p>doloribus ut dolorem sed sed.</p>`
  });
})
onUnmounted(() => {
  // Always destroy your editor instance when it's no longer needed
  editor.value.destroy();
})
</script>
