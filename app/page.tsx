import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
      <div>
      <Card className="flex my-4 mx-5 w-[350px] flex-col">
      <CardHeader className="text-bold">
         <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
    <p>Card Content</p>
    
     </CardContent>
    {/* <CardFooter>
    <p>Card Footer</p>
    </CardFooter> */}
  </Card>
  </div>
  
  );
}
