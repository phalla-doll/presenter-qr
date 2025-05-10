"use client";

import { Button } from "@/components/ui/button";

export default function AskPage() {
    return (
        <>
            <div className="container mx-4 sm:mx-auto">
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-4xl font-bold">Ask a Question</h1>
                    <p className="mt-4 text-lg">Get answers to your questions.</p>
                    <Button className="mt-6" variant="default">
                        Ask Now
                    </Button>
                </div>
            </div>
        </>
    );
}