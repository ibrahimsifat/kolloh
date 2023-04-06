module.exports = ({ env }) => ({
  // This is the plugin that generates the ERD

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

  // "google-auth": {
  //   enabled: true,
  // },

  // // this plugin is for bulk import and export data
  // "import-export-entries": {
  //   enabled: true,
  // },
});
