<template>
  <div class="log-input relative">
    <editor-content
      class="basic-editor rich-text bg-white border border-gray-400 p-2 main-editor pr-24 focus:border-black"
      style="min-height: 2rem"
      :editor="editor"
    />
    <button
      class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center absolute bottom-0 right-0 m-1"
      @click="makeTextLog"
    >
      <span class="leading-none mx-1 inline-block">Post</span>
      <AddPostIcon class="w-6 h-6 fill-current" style="margin-top: -3px" />
    </button>
  </div>
</template>

<script>
// Import the basic building blocks
import { Editor, EditorContent } from "tiptap";
import {
  Blockquote,
  Heading,
  Bold,
  Italic,
  History,
  Placeholder,
} from "tiptap-extensions";
import AddPostIcon from "~/assets/icons/add-post.svg";

export default {
  components: {
    EditorContent,
    AddPostIcon,
  },
  data() {
    return {
      editor: null,
      htmlDoc: null,
    };
  },
  methods: {
    makeTextLog() {
      this.$store.commit("activityLog/addTextLog", this.htmlDoc);
      this.editor.clearContent(true);
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
        new Placeholder({
          emptyEditorClass: "is-editor-empty",
          emptyNodeClass: "is-empty",
          emptyNodeText: "Describe Your Journey ...",
          showOnlyWhenEditable: true,
          showOnlyCurrent: true,
        }),
      ],
      onUpdate: ({ getJSON, getHTML }) => {
        this.htmlDoc = getHTML();
      },
      // content: "<h1>Pariatur laudantium </h1><p class="">totam et exercitationem id. Animi sint tempore aliquam sint. Et incidunt est ut quidem. </p><blockquote><p>foo bar qum quat</p><p><em>- Fibtu</em></p></blockquote><h1>Sequi assumenda </h1><p>doloribus ut dolorem sed sed.</p>"
    });
  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy();
  },
};
</script>

<style lang="postcss">
.main-editor {
  & p.is-editor-empty:first-child::before {
    content: attr(data-empty-text);
    float: left;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
  }
}
.rich-text {
  & h1 {
    @apply text-lg font-bold mt-1;
  }
  & blockquote {
    @apply border-l-2 border-accent-300 my-1 pl-2;
  }

  & p {
    @apply mb-2;
  }
}
</style>
