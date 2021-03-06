import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {
    Background,
    ButtonLink,
    Container,
    Group,
    Logo,
    Feature,
    Picture,
    Dropdown,
    Link,
    FeatureCallOut,
    Text,
    Profile, Search, SearchIcon, SearchInput, PlayButton
} from "./styles/header";

export const Header = ({bg = true, children, ...props}) => {
    return bg
        ? <Background {...props}>{children}</Background>
        : children
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    return <Container { ...props }>{ children }</Container>
}

Header.Logo = function HeaderLogo({ to, ...props }) {
    return (
        <NavLink to={to}>
            <Logo { ...props }/>
        </NavLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
    return <ButtonLink { ...props }>{children}</ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};