import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BookProps {
  id: number,
  imageSrc: string,
  imageAlt: string,
  name: string,
  reviews: {
    href: string,
    average: number,
    totalCount: number
  }
}

export default function BookItem(book: BookProps) {
  return (
    <div key={book.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={book.imageSrc}
          alt={book.imageAlt}
          className="h-full w-full lg:h-full lg:w-full "
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={"books/" + book.id}>
              <span aria-hidden="true" className="absolute inset-0" />
              {book.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{book.reviews.totalCount} avaliações</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-900">{book.reviews.average} </p>
          <StarIcon className="block h-4 w-4 ml-0.5"/>
        </div>
      </div>
    </div>
  )
}