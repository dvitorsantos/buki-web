import Navbar from '../components/Navbar'
import BookItem from '../components/BookItem'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import books from '../mock/books.json';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Home() {
    return (
        <>
            <div className="min-h-full">
                <Navbar />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Bem-vindo, {user.name}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <div className="bg-white">
                            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="flex items-center justify-items-center mb-4 gap-2">
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <button
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                                <div>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                        {books.map((book) => (
                                            <BookItem
                                                id={book.id}
                                                name={book.name}
                                                imageSrc={book.image.src}
                                                imageAlt={book.image.alt}
                                                reviews={book.reviews}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
