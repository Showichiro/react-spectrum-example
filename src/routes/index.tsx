import { Link } from "@adobe/react-spectrum";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      Hello /!
      <div>
        <div>
          <Link href={{ to: "/test" }}>to test</Link>
        </div>
        {[1, 2, 3, 4, 5].map((v) => (
          <div key={v}>
            <Link href={{ to: "/posts/$id", params: { id: `${v}` } }}>
              post:{v}
            </Link>
          </div>
        ))}
      </div>
    </div>
  ),
});
