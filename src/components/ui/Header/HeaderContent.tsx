import { Container } from '@/layout/Container'
import { Brand } from '@/components/ui/Brand'
import { Button } from '@/components/ui/Button'
import { Nav } from '@/components/ui/Nav'

export const HeaderContent = () => {
  return (
    <Container.Root className="flex justify-between">
      <Brand.Root />
      <Nav.Root />
      <Button.Root>Fazer Login</Button.Root>
    </Container.Root>
  )
}
