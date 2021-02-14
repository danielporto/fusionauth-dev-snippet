ARG FUSIONAUTH_VERSION
FROM fusionauth/fusionauth-app:${FUSIONAUTH_VERSION}
USER root
RUN apt update && \
    apt install -y curl &&\
    rm -rf /var/lib/apt/lists/*
USER fusionauth