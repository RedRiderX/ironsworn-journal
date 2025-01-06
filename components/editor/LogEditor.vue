<template>
  <div class="log-input relative">
    <EditorContent
      class="basic-editor rich-text bg-white border border-gray-400 p-2 main-editor pr-24"
      style="min-height: 2rem"
      :editor="editor"
    />
    <BaseButton
      class="absolute bottom-0 right-0 m-1"
      @click="updateTextLog"
      label="Save"
      icon="AddPostIcon"
    />
  </div>
</template>

<script>
// Import the basic building blocks
import { Editor, EditorContent } from "tiptap";
import StarterKit from "@tiptap/starter-kit";
// import { Blockquote, Heading, Bold, Italic, History } from "tiptap-extensions";
import BaseButton from "~/components/BaseButton";

export default {
  components: {
    EditorContent,
    BaseButton,
  },
  props: {
    uuid: String,
  },
  data() {
    return {
      editor: null,
      htmlDoc: this.$store.state.activityLog.list.find(
        (el) => el.uuid === this.uuid
      ).data.html,
    };
  },
  methods: {
    updateTextLog() {
      this.$store.commit("activityLog/updateTextLog", {
        uuid: this.uuid,
        html: this.htmlDoc,
      });
      this.$emit("update-done");
      // this.editor.clearContent(true);
    },
  },
  mounted() {
    // Create an `Editor` instance with some default content. The editor is
    // then passed to the `EditorContent` component as a `prop`
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new Heading({ levels: [1] }),
        new Bold(),
        new Italic(),
        new History(),
      ],
      onUpdate: ({ getJSON, getHTML }) => {
        this.htmlDoc = getHTML();
      },
      content: this.htmlDoc,
    });
  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy();
  },
};
</script>
