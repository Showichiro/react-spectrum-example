import { defaultTheme, Grid, Provider, View } from "@adobe/react-spectrum";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        height="100vh"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header">
          header
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar">
          sidebar
        </View>
        <View backgroundColor="purple-600" gridArea="content">
          content
        </View>
        <View backgroundColor="magenta-600" gridArea="footer">
          footer
        </View>
      </Grid>
    </Provider>
  );
}

export default App;
