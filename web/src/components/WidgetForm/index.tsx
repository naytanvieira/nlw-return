import { CloseBottom } from "../CloseBottom";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto'
        }
    },
    IDEA: {
        title: 'Idéia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um boptão de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedBackSent, setFeedbackSent] = useState(false);

    function handleFeedbackRestart() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


            {feedBackSent ? (
                <FeedbackSuccessStep 
                onFeedbackRestartRequested={handleFeedbackRestart}
                />
            ) : (
                <>

                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedBackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleFeedbackRestart}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}

                </>
            )}

            <footer className="text-xs text-neutral-400 ">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://tecnologicbrasil.com.br">Tecnologic Brasil</a>
            </footer>
        </div>
    )
}