import Header from '@/components/dasboard/header'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Link from 'next/link'
import React from 'react'

const page = async() => {

    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: {user_email: user.email} })

  return (
    <>
    <Header title={"Comments"} />
    <div className='grid grid-cols-1 px-4 py-8 gap-4'>
        {comments.map(comment => {
            return (
                <Link 
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id} className='bg-color-primary p-4'>
                    <p className='text-sm'>{comment.anime_title}</p>
                    <p className='italic'>{comment.comment}</p>
                </Link>
            )
        })}
    </div>
    </>
  )
}

export default page