<template>
  <div class="log-input relative">
    <EditorContent
      class="basic-editor rich-text bg-white border border-gray-400 p-2 main-editor pr-24"
      style="min-height: 2rem;"
      :editor="editor"
    />
    <button
      class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center absolute bottom-0 right-0 m-1"
      @click="updateTextLog"
    >
      <span class="leading-none mx-1 inline-block">Save</span>
      <AddPostIcon class="w-6 h-6 fill-current" style="margin-top: -3px"/>
    </button>
  </div>
</template>

<script>
// Import the basic building blocks
import { Editor, EditorContent } from "tiptap";
import { Blockquote, Heading, Bold, Italic, History } from "tiptap-extensions";
import AddPostIcon from "~/assets/icons/add-post.svg";

export default {
  components: {
    EditorContent,
    AddPostIcon,
  },
  props: {
    uuid: String,
  },
  data() {
    return {
      editor: null,
      htmlDoc: this.$store.state.activityLog.list.find(
        el => el.uuid === this.uuid
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
