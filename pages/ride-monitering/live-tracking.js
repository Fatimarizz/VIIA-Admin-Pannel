
import Layout from "@/components/layout/layout";
import LivetrackingComponent from "@/components/rideMonitering/Live-trackingComponent";


export default function Notifications  ()  {
    return (
        <Layout title={'Ride Monitoring'}>
            <LivetrackingComponent/>
        </Layout>
    )
}