import {
  Outlet,
  type ToOptions,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import { Grid, View, Provider, defaultTheme } from "@adobe/react-spectrum";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const router = useRouter();
  return (
    <Provider
      theme={defaultTheme}
      router={{
        navigate: (path: ToOptions, options) =>
          router.navigate({ ...path, ...options }),
        useHref: ({ to }) => router.buildLocation({ to }).href,
      }}
    >
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        height="100vh"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header">
          <Header />
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar">
          sidebar
        </View>
        <View backgroundColor="purple-600" gridArea="content">
          <Outlet />
        </View>
        <View backgroundColor="magenta-600" gridArea="footer">
          <Footer />
        </View>
      </Grid>
    </Provider>
  );
}
