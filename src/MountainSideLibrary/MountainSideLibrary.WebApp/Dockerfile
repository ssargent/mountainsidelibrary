FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 58248
EXPOSE 44391

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY MountainSideLibrary.WebApp/MountainSideLibrary.WebApp.csproj MountainSideLibrary.WebApp/
RUN dotnet restore MountainSideLibrary.WebApp/MountainSideLibrary.WebApp.csproj
COPY . .
WORKDIR /src/MountainSideLibrary.WebApp
RUN dotnet build MountainSideLibrary.WebApp.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish MountainSideLibrary.WebApp.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MountainSideLibrary.WebApp.dll"]
