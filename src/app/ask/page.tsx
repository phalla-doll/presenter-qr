"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CircleHelp, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function AskPage() {
    return (
        <>
            <div className="container sm:mx-auto">
                <div className="flex flex-col items-center w-full justify-center min-h-screen py-20 px-4">
                    <Card className="w-full sm:max-w-lg">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-x-1.5"><MessageCircle className="h-6 w-6" /> Ask</CardTitle>
                            <CardDescription>Get answers to your question from your audience.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Textarea placeholder="Type your question here..." />
                            <div className="flex justify-end">
                                <Button className="mt-6" variant="default">
                                    Ask Now
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <p className="text-muted-foreground text-sm flex items-center gap-x-1">
                                <CircleHelp className="h-4 w-4" /> Need help? <Link href="/support" className="underline">Contact support</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}