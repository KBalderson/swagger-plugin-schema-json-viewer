# Swagger UI JSON Schema Viewer Plugin

A Swagger UI plugin that displays the current schema as JSON Schema format with a convenient copy-to-clipboard feature.

## Features

- 📄 Display any OpenAPI schema in JSON Schema format
- 📋 One-click copy to clipboard
- 🎨 Clean, readable syntax highlighting
- 🔄 Automatic integration with Swagger UI's Model component

## Installation

### Via GitHub Packages

This package is published to GitHub Packages. To install it:

1. Create or update your `.npmrc` file in your project root:
```bash
echo "@kbalderson:registry=https://npm.pkg.github.com" >> .npmrc
```

2. Authenticate with GitHub Packages (you'll need a GitHub Personal Access Token with `read:packages` permission):
```bash
npm login --registry=https://npm.pkg.github.com --scope=@kbalderson
```

3. Install the package:
```bash
npm install @kbalderson/swagger-plugin-schema-json-viewer
```

### Manual Installation

1. Clone this repository:
```bash
git clone https://github.com/KBalderson/swagger-plugin-schema-json-viewer.git
cd swagger-plugin-schema-json-viewer
```

2. Install dependencies:
```bash
npm install
```

3. Build the plugin:
```bash
npm run build
```

The compiled plugin will be in the `dist/` directory.

## Usage

### With Swagger UI Bundle

```html
<!DOCTYPE html>
<html>
<head>
  <title>Swagger UI</title>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>

  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js"></script>
  <script src="dist/index.js"></script>

  <script>
    window.onload = function() {
      SwaggerUIBundle({
        url: "https://petstore.swagger.io/v2/swagger.json",
        dom_id: '#swagger-ui',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl,
          SwaggerPluginSchemaJsonViewer // Add the plugin here
        ],
        layout: "StandaloneLayout"
      });
    };
  </script>
</body>
</html>
```

### With Swagger UI React

```javascript
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import SwaggerPluginSchemaJsonViewer from '@kbalderson/swagger-plugin-schema-json-viewer';

function App() {
  return (
    <SwaggerUI
      url="https://petstore.swagger.io/v2/swagger.json"
      plugins={[SwaggerPluginSchemaJsonViewer]}
    />
  );
}
```

## Development

### Build for development (with watch mode)

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run the example

```bash
npm run serve
```

Then open your browser to `http://localhost:8080/example/`

## How It Works

The plugin wraps Swagger UI's `Model` component and adds a JSON Schema viewer below each schema definition. When you expand a model in the Swagger UI:

1. The original model view displays as normal
2. Below it, a formatted JSON Schema representation appears
3. Click the "Copy" button to copy the schema to your clipboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Publishing

This package is automatically published to GitHub Packages using GitHub Actions when:

1. **Creating a release**: Create a new release on GitHub with a version tag (e.g., `v1.0.0`)
2. **Pushing a version tag**: Push a tag starting with `v` (e.g., `git tag v1.0.1 && git push origin v1.0.1`)
3. **Manual workflow dispatch**: Manually trigger the publish workflow from the Actions tab

### Publishing a new version

```bash
# Update version in package.json
npm version patch  # or minor, or major

# Push the changes and tags
git push && git push --tags

# Or create a GitHub release
gh release create v1.0.1 --title "Release v1.0.1" --notes "Release notes here"
```

The GitHub Actions workflow will automatically build and publish the package to GitHub Packages.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
