import React, { createContext, useContext, useState, ReactNode } from "react";
import { DataNotice } from "../routes/RouteDefault";

interface ParamContextType {
  paramURL: string;
  setParamURL: (param: string) => void;
}

interface NoticeContextType {
  paramNotice: DataNotice | null;
  setParamNotice: (paramNotice: DataNotice) => void;
}

interface ParamIdContextType {
  paramId: string;
  setParamId: (paramId: string) => void;
}

const ParamContext = createContext<ParamContextType | undefined>(undefined);
const NoticeContext = createContext<NoticeContextType | null>(null);
const ParamIdContext = createContext<ParamIdContextType | undefined>(undefined);

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
  const [paramNotice, setParamNotice] = React.useState<DataNotice | null>(null);

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
    throw new Error("NoticeContext debe ser usado dentro de un NoticeContext");
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
