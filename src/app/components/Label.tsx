export interface LabelProps {
    name: string;
    iconUrl: string;
    small?: boolean;
}

export function Label({ name, iconUrl, small = false }: LabelProps) {
    if(small) {
        return (
            <li className="border border-grayLabel flex gap-1 px-2 py-1 rounded-md">
                <img width={16} src={iconUrl} />
                <span className="text-xs">{name}</span>
            </li> 
        )
    }

    return (
        <li className="border border-grayLabel flex gap-2 px-4 py-1 rounded-md">
            <img width={20} src={iconUrl} />
            <span>{name}</span>
        </li> 
    )
}