import { ClockIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface IQuoteItem {
  quote: any;
  provided: any;
  isDragging: boolean;
  isClone?: boolean;
  isGroupedOver?: boolean;
  index?: number;
}

function QuoteItem(props: IQuoteItem) {
  const { quote, isDragging, isGroupedOver, provided, isClone, index } = props;

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`mb-5 bg-white shadow-md p-3 rounded-md  ${
        isDragging && "ring"
      }`}
    >
      {isClone ? <div>Clone</div> : null}
      <div>
        <div className="flex gap-3">
          <div className="w-10 h-10">
            <Image
              alt={quote.lead_name.name}
              src={quote.lead_name.image}
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">{quote.lead_name.name}</p>
            <div className="text-sm -mt-1 text-gray-500 flex gap-1 items-center">
              <ClockIcon className="w-4 h-4" />
              <p>{moment().format("DD MMM YYYY")}</p>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex gap-1 items-center text-gray-400">
            <FaPhoneAlt className="w-4 h-4" />
            <p>{quote.contact.phone}</p>
          </div>
          <div className="flex gap-1 items-center text-gray-400">
            <FaEnvelope className="w-4 h-4" />
            <p className="break-words">{quote.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuoteItem);