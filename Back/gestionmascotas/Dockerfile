FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/gestionmascotas-0.0.1.jar
COPY ${JAR_FILE} app_gestionmascotas.jar
EXPOSE 7070
ENTRYPOINT ["java", "-jar", "app_gestionmascotas.jar"]
