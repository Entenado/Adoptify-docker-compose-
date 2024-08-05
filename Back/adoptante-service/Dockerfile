FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/adoptante-service-0.0.1.jar
COPY ${JAR_FILE} app_adoptante.jar
EXPOSE 7073
ENTRYPOINT ["java", "-jar", "app_adoptante.jar"]
