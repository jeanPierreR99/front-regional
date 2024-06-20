import React, { createContext, useContext, useState, ReactNode } from "react";

interface ParamContextType {
  paramURL: string;
  setParamURL: (param: string) => void;
}

interface NoticeContextType {
  paramNotice: any | null;
  setParamNotice: (paramNotice: any) => void;
}

interface PostContextType {
  paramPost: any | null;
  setParamPost: (paramPost: any) => void;
}

interface ParamIdContextType {
  paramId: string;
  setParamId: (paramId: string) => void;
}

interface LoginContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);
const ParamContext = createContext<ParamContextType | undefined>(undefined);
const NoticeContext = createContext<NoticeContextType | null>(null);
const PostContext = createContext<PostContextType | null>(null);
const ParamIdContext = createContext<ParamIdContextType | undefined>(undefined);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const ParamProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [paramURL, setParamURL] = useState("inicio");

  const paramContextValue: ParamContextType = {
    paramURL,
    setParamURL,
  };

  return (
    <ParamContext.Provider value={paramContextValue}>
      {children}
    </ParamContext.Provider>
  );
};

export const NoticeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [paramNotice, setParamNotice] = React.useState<any | null>(null);

  const noticeContextValue: NoticeContextType = {
    paramNotice,
    setParamNotice,
  };

  return (
    <NoticeContext.Provider value={noticeContextValue}>
      {children}
    </NoticeContext.Provider>
  );
};

export const PostProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [paramPost, setParamPost] = React.useState<any | null>(null);

  const postContextValue: PostContextType = {
    paramPost,
    setParamPost,
  };

  return (
    <PostContext.Provider value={postContextValue}>
      {children}
    </PostContext.Provider>
  );
};

export const ParamIdProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [paramId, setParamId] = useState("gg");

  const paramIdContextValue: ParamIdContextType = {
    paramId,
    setParamId,
  };

  return (
    <ParamIdContext.Provider value={paramIdContextValue}>
      {children}
    </ParamIdContext.Provider>
  );
};

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

export const useParam = () => {
  const context = useContext(ParamContext);

  if (!context) {
    throw new Error("useparam debe ser usado dentro de un paramprovider");
  }
  return context;
};

export const useNotice = () => {
  const context = useContext(NoticeContext);

  if (!context) {
    throw new Error("NoticeContext debe ser usado dentro de un NOTICEContext");
  }
  return context;
};

export const usePost = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("PostContext debe ser usado dentro de un POSTprovider");
  }
  return context;
};

export const useParamId = () => {
  const context = useContext(ParamIdContext);

  if (!context) {
    throw new Error("useparam debe ser usado dentro de un paramprovider");
  }
  return context;
};
