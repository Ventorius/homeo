import { Button } from "@/components/ui/button"
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => 0,
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <Button type="button">
      Add 1 to {state}?
    </Button>
  )
}