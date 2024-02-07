'use client'
import { FormEvent, useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"




function Upload() {
    const [caption, setcaption] = useState("")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(caption)
    }
    if (!window) return null

    return (

        <>
            <AlertDialog>
                <AlertDialogTrigger>
                    <Button className="fixed z-10 bottom-9 right-9 ">
                        <UploadIcon className="mr-2 h-4 w-4" /> Upload
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center text-white">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Upload</AlertDialogTitle>
                        </AlertDialogHeader>
                        <Input type="file" accept="image/*" className="mb-4" />
                        <Input type="text" placeholder="Caption" value={caption} onChange={(e) => setcaption(e.target.value)} className="text-black mb-4 p-2 border border-gray-300 rounded " />
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction type="submit" >Upload</AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default Upload