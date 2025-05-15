export class BirthRange {
    private static fromYear = 1980;
    private static toYear = new Date().getFullYear() - 6;

    public static yearOptions() {
        return Array.from({ length: this.toYear - this.fromYear + 1 }).map((_, index) => {
            const year = (this.toYear - index).toString();
            return { label: `${year}년`, value: year };
        });
    }

    public static monthOptions() {
        return Array.from({ length: 12 }).map((_, index) => {
            const month = (index + 1).toString();
            return { label: `${month}월`, value: month };
        });
    }

    public static dayOptions(year: number, month: number) {
        const daysInMonth = [
            31,
            BirthRange.isLeapYear(year) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];
        const days = daysInMonth[month - 1];
        return Array.from({ length: days }).map((_, index) => {
            const day = (index + 1).toString();
            return { label: `${day}일`, value: day };
        });
    }

    private static isLeapYear(year: number) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
}
