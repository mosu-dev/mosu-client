import { EventCard } from "@/entities/events/ui/EventCard";

export default function EventPage() {
    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">이벤트</h1>
            </header>

            <section className="grid grid-cols-3 gap-5">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </section>
        </div>
    );
}

EventPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[1000px] mx-auto px-4">{page}</div>;
};
