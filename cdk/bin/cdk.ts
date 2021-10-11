#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
// import { CdkStack } from '../lib/cdk-stack';
import { FargateStack } from "../lib/fargate";
import { CloudfrontStack } from "../lib/cloudfront";

const app = new cdk.App();

// Fargate stack
const stack1 = new FargateStack(app, "FargateStack", {
  env: { account: "xxxxxx", region: "us-east-1" },
});

// Cloudfront stack
const stack2 = new CloudfrontStack(app, "CloudfrontStack", {
  env: { account: "xxxxxx", region: "us-east-1" },
});

stack2.addDependency(stack1);
