FROM fusionauth/fusionauth-app:1.22.2
USER root
RUN apt update && \
    apt install -y curl &&\
    rm -rf /var/lib/apt/lists/*
USER fusionauth