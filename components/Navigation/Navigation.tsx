import React, {ReactNode} from "react";

type NavigationProps = {
    name?: ReactNode,
    list: ReactNode,
}

const Navigation: React.FC<NavigationProps> = ({name = null, list}) => {
    return (
        <nav>
            {name}
            {list}
        </nav>
    );
}

export default Navigation;