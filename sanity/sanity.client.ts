import { createClient, type ClientConfig } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
};

const client = createClient(config);

export default client;