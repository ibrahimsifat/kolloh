module.exports = ({ env }) => ({
  "generate-data": {
    enabled: true,
  },

  // This is the plugin that generates the ERD
  "entity-relationship-chart": {
    enabled: true,
    config: {
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },

  //   localazy: {
  //     enabled: true,
  //     resolve: "./src/plugins/localazy",
  //     config: {
  //       default: () => {},
  //       validator: () => {},
  //     },
  //   },

  // this is the plugin that make seo friendly content
  seo: {
    enabled: true,
  },

  // this is the plugin that make slug for every content
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },

  //A plugin to initialize or update automatically your data for all of your environments
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath: "migrations",
    },
  },

  //Automatically generate base64 placeholders for Media Library images
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },

  //Replaces the default Strapi WYSIWYG editor with a customized build of TinyMCE editor.
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        editorConfig: {
          language: "sk",
          height: 500,
          menubar: false,
          extended_valid_elements: "span, img, small",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "advlist autolink lists link image charmap preview anchor \
                    searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                    insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | styles | bold italic forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    table emoticons visualblocks code|\
                    nonbreaking bullist numlist outdent indent | removeformat | help",
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" },
              ],
            },

            {
              title: "Text",
              items: [
                { title: "Paragraph", block: "p" },
                {
                  title: "Paragraph with small letters",
                  block: "small",
                },
              ],
            },
          ],
        },
      },
    },
  },

  // "google-auth": {
  //   enabled: true,
  // },

  // // this plugin is for bulk import and export data
  // "import-export-entries": {
  //   enabled: true,
  // },
});
