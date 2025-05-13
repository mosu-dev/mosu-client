import { InferGetStaticPropsType } from "next";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion";

import { NoticeLayout } from ".";

export default function NoticeFAQPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Accordion type="single" collapsible>
            {props.items.map((item) => {
                return (
                    <AccordionItem key={item.id} value={item.title}>
                        <AccordionTrigger>Q. {item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}

NoticeFAQPage.layout = NoticeLayout;

export const getStaticProps = async () => {
    return {
        props: {
            items: [
                {
                    id: 1,
                    title: "N수생도 지원이 가능한가요?",
                    content:
                        "네, 가능합니다. 모수의 모의수능에는 재학생과 N수생 모두 참여 가능합니다.",
                },
                {
                    id: 2,
                    title: "모의 수능을 치를 시험장은 어떻게 배정되나요?",
                    content:
                        "네, 가능합니다. 모수의 모의수능에는 재학생과 N수생 모두 참여 가능합니다.",
                },
                {
                    id: 3,
                    title: "모의 수능 일정은 어떻게 되나요?",
                    content:
                        "네, 가능합니다. 모수의 모의수능에는 재학생과 N수생 모두 참여 가능합니다.",
                },
                {
                    id: 4,
                    title: "성적 산출은 어떻게 하나요?",
                    content:
                        "네, 가능합니다. 모수의 모의수능에는 재학생과 N수생 모두 참여 가능합니다.",
                },
                {
                    id: 5,
                    title: "모의 수능 문제의 출제 기관은 어디인가요?",
                    content:
                        "네, 가능합니다. 모수의 모의수능에는 재학생과 N수생 모두 참여 가능합니다.",
                },
            ],
        },
    };
};
