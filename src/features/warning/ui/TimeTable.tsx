import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

const timeTableData = [
    {
        class: "1교시",
        subject: "국어",
        time: "08시 40분 ~ 10시 00분 (80분)",
        note: "",
    },
    {
        class: "",
        subject: "쉬는 시간",
        time: "10시 00분 ~ 10시 20분 (20분)",
        note: "",
    },
    {
        class: "2교시",
        subject: "수학",
        time: "10시 30분 ~ 12시 10분 (100분)",
        note: "",
    },
    {
        class: "",
        subject: "점심 시간",
        time: "12시 10분 ~ 13시 00분 (50분)",
        note: "",
    },
    {
        class: "3교시",
        subject: "영어",
        time: "13시 10분 ~ 14시 20분 (70분)",
        note: "듣기평가 포함",
    },
    {
        class: "",
        subject: "쉬는 시간",
        time: "14시 20분 ~ 14시 40분 (20분)",
        note: "",
    },
    {
        class: "4교시",
        subject: "한국사",
        time: "14시 50분 ~ 15시 20분 (30분)",
        note: "",
    },
    {
        class: "",
        subject: "탐구 1과목",
        time: "15시 35분 ~ 16시 05분 (30분)",
        note: "사회/과학 택1",
    },
    {
        class: "",
        subject: "탐구 2과목",
        time: "16시 07분 ~ 16시 37분 (30분)",
        note: "탐구 영역은 선택과목에 따라 1개 혹은 2개 과목 응시 가능하며,\n한국사 및 탐구 응시를 모두 마친 수험생은 대기실로 이동",
    },
    {
        class: "",
        subject: "쉬는 시간",
        time: "16시 37분 ~ 16시 55분 (18분)",
        note: "",
    },
    {
        class: "5교시",
        subject: "제2외국어 / 한문",
        time: "17시 05분 ~ 17시 45분 (40분)",
        note: "해당 선택자만 응시",
    },
];

export const TimeTable = () => {
    return (
        <Table className="text-lg text-center">
            <TableHeader className="bg-[#F5F5F5] border-black border-t">
                <TableRow className="[&>th]:text-center">
                    <TableHead className="w-[100px]">교시</TableHead>
                    <TableHead>과목</TableHead>
                    <TableHead>시험시간</TableHead>
                    <TableHead className="text-right">비고</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {timeTableData.map((row, index) => {
                    return (
                        <TableRow key={index} className="[&>td]:whitespace-pre-wrap">
                            <TableCell className="w-[100px]">{row.class}</TableCell>
                            <TableCell>{row.subject}</TableCell>
                            <TableCell>{row.time}</TableCell>
                            <TableCell>{row.note}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
