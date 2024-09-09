import { Link } from "@adobe/react-spectrum";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: () => {
    return (
      <div>
        Hello /test!
        <div>
          <Link href={{ to: "/" }}>to top</Link>
        </div>
      </div>
    );
  },
});
