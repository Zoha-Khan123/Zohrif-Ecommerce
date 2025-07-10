import { Star } from 'lucide-react'
import React from 'react'

interface StarsProps {
  rating: number;
  reviews:number
}

const Stars = ({ rating , reviews }: StarsProps) => {
  return (
     <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(rating) ? "fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
  )
}

export default Stars