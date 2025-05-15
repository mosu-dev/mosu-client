import { CornerDownRight } from "lucide-react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

interface PostTableRowProps {
    type: "POST" | "REPLY";
    id: number;
    title: string;
    author: string;
    createdAt: string;
    onClick?: () => void;
}

const PostTableRow = ({ type, id, title, author, createdAt, onClick }: PostTableRowProps) => {
    return (
        <TableRow onClick={onClick}>
            <TableCell className="">
                {type === "POST" ? id : <CornerDownRight size={14} />}
            </TableCell>
            <TableCell className="w-full">{title}</TableCell>
            <TableCell className="">{author}</TableCell>
            <TableCell className="">{createdAt}</TableCell>
        </TableRow>
    );
};

interface PostTableProps {
    rows: Array<PostTableRowProps>;
    injectOnClickEventHandler: (row: PostTableRowProps) => () => void;
}

export const PostTable = ({ rows, injectOnClickEventHandler }: PostTableProps) => {
    return (
        <Table className="text-lg">
            <TableHeader className="text-xl">
                <TableRow className="border-spacing-6">
                    <TableHead className=" text-center">No</TableHead>
                    <TableHead className="w-full text-center">제목</TableHead>
                    <TableHead className=" text-center">글쓴이</TableHead>
                    <TableHead className=" text-center">작성일</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {rows.map((row) => {
                    return (
                        <PostTableRow
                            key={row.id}
                            {...row}
                            onClick={injectOnClickEventHandler(row)}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
};
