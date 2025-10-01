
export default function Avatar({ size = "w-8" }:{ size: string }) {
    
    return (
        <div className="avatar">
            <div className={`mask mask-hexagon-2 ${size}`}>
                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
            </div>
        </div>
    )
}