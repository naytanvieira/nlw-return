import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseBottom } from "../../CloseBottom";

interface FeedBackContentStepProps {
    feedbackType : FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedBackContentStep({
    feedbackType, onFeedbackRestartRequested} : FeedBackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
        <header>
            <button onClick={onFeedbackRestartRequested} type="button">
                <ArrowLeft weight="bold" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 "/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                {feedbackTypeInfo.title}
            </span>
            <CloseBottom />
        </header>
        
        <form className="my-4 w-full">
            <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 p-3 focus:outline-none resize-none"
            placeholder="Conte com detalhes o que está acontecendo"
            >

            </textarea>
        </form>
    </>
    )
}