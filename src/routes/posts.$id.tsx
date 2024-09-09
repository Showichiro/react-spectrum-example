import { Link } from "@adobe/react-spectrum";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
  component: Post,
});

function Post() {
  const { id } = Route.useParams();
  return (
    <div>
      Hello /posts/{id}!
      <div>
        <Link href={{ to: "/" }}>to top</Link>
      </div>
    </div>
  );
}
