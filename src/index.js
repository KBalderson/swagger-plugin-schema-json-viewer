import React from 'react';

const JsonSchemaViewerPlugin = () => {
  return {
    components: {
      JsonSchemaViewer: JsonSchemaViewerComponent
    },
    wrapComponents: {
      Model: ModelWrapper
    }
  };
};

// Main component to display JSON Schema
const JsonSchemaViewerComponent = ({ schema }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    const jsonString = JSON.stringify(schema, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!schema) {
    return null;
  }

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '15px',
      marginTop: '10px',
      fontFamily: 'monospace'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <strong>JSON Schema</strong>
        <button
          onClick={copyToClipboard}
          style={{
            padding: '5px 10px',
            backgroundColor: copied ? '#4CAF50' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre style={{
        backgroundColor: '#282c34',
        color: '#abb2bf',
        padding: '15px',
        borderRadius: '4px',
        overflow: 'auto',
        maxHeight: '500px',
        margin: 0,
        fontSize: '13px',
        lineHeight: '1.5'
      }}>
        {JSON.stringify(schema, null, 2)}
      </pre>
    </div>
  );
};

// Wrapper component to inject JSON Schema viewer into the Model component
const ModelWrapper = (Original, system) => (props) => {
  const { schema, getComponent } = props;

  return (
    <div>
      <Original {...props} />
      {schema && (
        <div style={{ marginTop: '10px' }}>
          <JsonSchemaViewerComponent schema={schema.toJS ? schema.toJS() : schema} />
        </div>
      )}
    </div>
  );
};

export default JsonSchemaViewerPlugin;
