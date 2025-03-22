export interface LabelProps {
    name: string;
    iconUrl: string;
}

export function Label({ name, iconUrl }: LabelProps) {
    return (
        <li className="border border-grayLabel flex gap-2 px-4 py-1 rounded-md">
            <img width={20} src={iconUrl} />
            {name}
        </li> 
    )
}