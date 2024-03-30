interface ModelConfigProps {}
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'

export function ModelConfig({}: ModelConfigProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <MixerHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="p-2">
        model config is in development :)
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// TODO: DELETE THIS
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[350px]">
      <TabsList className="grid grid-cols-2 mt-1">
        <TabsTrigger value="account">Only This Chat</TabsTrigger>
        <TabsTrigger value="password">All llama2 Chats</TabsTrigger>
        {/* <TabsTrigger value="all">All Chats</TabsTrigger> */}
      </TabsList>
      <TabsContent value="account">
        <CardDescription className="text-center p-2">
          This Configuration will only affect this chat.
        </CardDescription>
        <Card className="border-none">
          {/* <CardHeader >
            <CardTitle>Conversation</CardTitle>
            <CardDescription>
              This Configuration will only affect this chat.
            </CardDescription>
          </CardHeader> */}

          <CardContent className="space-y-2 px-[1rem] pb-[1rem]">
            {/* <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div> */}
            {/* <TemperatureSelector defaultValue={[0.56]} />
            <TemperatureSelector defaultValue={[0.56]} />
            <TemperatureSelector defaultValue={[0.56]} />
            <TemperatureSelector defaultValue={[0.56]} /> */}
          </CardContent>
          <CardFooter className="flex justify-between px-[1rem] pb-[1rem]">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        {/* <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card> */}
      </TabsContent>
    </Tabs>
  )
}
