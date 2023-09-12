
import { StarIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';

import books from '../mock/books.json';

function fetchData(id: number) {
  return books.find(book => book.id === id);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  {
    name: 'Leslie Alexander',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

export default function Books() {
  const { id } = useParams();
  const book = fetchData(parseInt(id));

  return (
    <>
      <Navbar />
      <div className='container mx-auto pt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 '>

          {/* image */}
          <div className="col-span-3 mx-4">
            <img
              src={book?.image.src}
              alt={book?.image.alt}
              className="w-full  sm:h-[50rem] lg:h-[30rem] xl:h-[30rem] rounded-md"
            />
          </div>

          <div className='col-span-9 p-6'>
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{book?.name}</h1>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        book?.reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{book?.reviews.average} out of 5 stars</p>
                <a href={book?.reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {book?.reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="py-10 lg:col-span-2">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{book?.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Detalhes</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {book?.details.map((detail) => (
                      <li key={detail} className="text-gray-400">
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mt-4 mx-4">
            <ul role="list" className="divide-y divide-gray-100">
              {people.map((person) => (
                <li key={person.name} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">{person.comment}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-full mt-4 mx-4">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
              Gostou? Faça um comentário.
            </label>
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>

        </div>
      </div>
    </>
  )
}
