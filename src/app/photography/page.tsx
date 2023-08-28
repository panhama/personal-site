import FetchAlbum from "@components/FetchAlbum";

export default function page() {
    return <div style={{ background: 'wheat' }}>
        <h1 style={{ paddingTop: '5rem' }}>Test</h1>
        <FetchAlbum Portfolio={true}/>
    </div>;
}